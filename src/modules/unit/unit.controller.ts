import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUnitInput } from "./unit.schema";
import UnitService from "./unit.service";
import { errorFilter } from "../../middlewares/error-handling";

export async function createUnitHandler(
    req: FastifyRequest<{
        Body: CreateUnitInput;
    }>,
    reply: FastifyReply
) {
    const body = req.body

    try {
        const faculty = await UnitService.createUnit(body)
        reply.send({
            data: faculty,
            message: "Unit Added Successfully",
            status: "success"
        })

    } catch (e) {
        errorFilter(e, reply)
    }
}

export async function getAllUnitHandler(
    req: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const faculty = await UnitService.getAllUnit()
        reply.send({
            data: faculty,
            message: "Unit Fetched Successfully",
            status: "success"
        })

    } catch (e) {
        errorFilter(e, reply)
    }
}

export async function getUnitByIdHandler(
    req: FastifyRequest<{
        Params: {
            id: string;
        };
    }>,
    reply: FastifyReply
) {
    try {
        const faculty = await UnitService.getUnitById(req.params.id)
        reply.send({
            data: faculty,
            message: "Unit Fetched Successfully",
            status: "success"
        })

    } catch (e) {
        errorFilter(e, reply)
    }
}

export async function updateUnitHandler(
    req: FastifyRequest<{
        Body: CreateUnitInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    const body = req.body

    try {
        const faculty = await UnitService.updateUnit(req.params.id, body)
        reply.send({
            data: faculty,
            message: "Unit Updated Successfully",
            status: "success"
        })

    } catch (e) {
        errorFilter(e, reply)
    }
}

export async function deleteUnitHandler(
    req: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const faculty = await UnitService.deleteUnit(req.params.id)
        reply.send({
            data: faculty,
            message: "Unit Deleted Successfully",
            status: "success"
        })

    } catch (e) {
        errorFilter(e, reply)
    }
}